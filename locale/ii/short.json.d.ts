import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ii';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;