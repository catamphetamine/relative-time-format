import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'vec';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;