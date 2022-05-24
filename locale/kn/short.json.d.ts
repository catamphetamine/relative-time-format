import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'kn';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;