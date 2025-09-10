import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'vec';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;