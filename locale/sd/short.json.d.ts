import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'sd';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;