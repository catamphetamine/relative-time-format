import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-NZ';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;