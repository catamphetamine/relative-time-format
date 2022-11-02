import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'eo';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;