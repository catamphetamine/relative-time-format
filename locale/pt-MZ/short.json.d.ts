import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'pt-MZ';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;