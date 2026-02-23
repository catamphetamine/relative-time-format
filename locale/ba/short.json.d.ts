import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ba';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;