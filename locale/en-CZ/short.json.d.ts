import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-CZ';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;