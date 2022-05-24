import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'bn';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;